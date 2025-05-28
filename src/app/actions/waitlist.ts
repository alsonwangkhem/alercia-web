"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const emailSchema = z.string().email({ message: "Please enter a valid email address" });

export async function joinWaitlist(formData: FormData) {
    try {

        const email = formData.get("email")?.toString();
        
        const result = emailSchema.safeParse(email);
        if(!result.success) {
            throw new Error(result.error.errors[0].message);
        }
        
        const { error } = await supabase.from("waitlist").insert([{ email: result.data }]);
        if (error) {
            if(error.code === "23505") {
                return { error: "This email is already on the waitlist" };
            }
            return { error: "This email is already on the waitlist" };
        }
        return { message: "Thanks for joining the waitlist!"};
    } catch (err) {
        console.error("Unexpected error in joinWaitlist: ", err)
        return { error: "An unexpected error occured. Please try again."};
    }
}