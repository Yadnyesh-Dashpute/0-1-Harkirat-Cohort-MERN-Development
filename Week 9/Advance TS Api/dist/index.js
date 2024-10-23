"use strict";
// ---- 1. Interface In TS:
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
displayUserProfile({ name: "Rohan" });
