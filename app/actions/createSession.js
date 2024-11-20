"use server";

export async function createSession (email, password) {
return new Promise ((resolve, reject)=> {
if(!email || !password) {
    reject (new Error("Login failed. Email or password is missing."))
}
else {
    setTimeout(()=> {
        resolve({message: "Login successful."})
    }, 1000)
}
})
}
