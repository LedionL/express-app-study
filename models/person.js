import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    userOrder: { type: Object, default: {test: 'test value'} }
}, { timestamps: true , minimize: false});

export const Person = mongoose.model('Person', personSchema);

 