import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://bhcurpsrskowsgqxdjim.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoY3VycHNyc2tvd3NncXhkamltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1OTIwMDQsImV4cCI6MjAxNTE2ODAwNH0.SKtmyrEFgHuIKdQcPcPB9UvXQnQhDx9UHhDW9yxl4LM");

export const insertMessage = async (message) => {
    const { data, error } = await supabase
        .from("messages")
        .insert([{ content: message.content, sent_at: message.sent_at, sender: message.sender, board: message.board }]);
};

export const fetchMessages = async () => {
    const { data, error } = await supabase
        .from("messages")
        .select()
    return data;
};

export const createUser = async (user) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
        });

        if (error) {
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw error;
    }
};

export const validateUser = async (user) => {
    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })
        if (error) {
            throw new Error(error.message);
        }
        
    }
    catch (error) {
        console.error("Error signing in:", error.message);
        throw error
    }
}