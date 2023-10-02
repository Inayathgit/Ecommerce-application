import categorymodel from "../models/categorymodel.js";
import Categorymodel from "../models/categorymodel.js";
import slugify from "slugify";



//create category Controller

export const createcategoryController = async(req,res)=>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(401).send({success:false,message:'Name is required'})
        }
        const existingcategory = await Categorymodel.findOne({name})
        if(existingcategory){
            return res.status(401).send({
                success:false,
                message:'Category already existed'
            })
        }
        const category = await new Categorymodel({name:name,slug:slugify(name)}).save()

        return res.status(201).send({
            success:true,
            message:'Category created successfully',
            category
        })
    } catch (error) {
        console.log(error)

        return res.status(500).send({
            success:false,
            error
        })
    }

}

// update category controller

export const updatecategoryController = async(req,res)=>{
    try {
        const {name} = req.body
        const {id} = req.params

        const category = await categorymodel.findByIdAndUpdate(id,{name,slug:slugify(name),new:true})
        res.status(201).send({
            success:true,
            message:'category updated successfully'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error
        })
    }



}


//get categories controller

export const getcategoriesController = async (req,res)=>{
    try {
        const categories = await categorymodel.find({})

        return res.status(200).send({
            success:true,
            message:'Categories list',
            categories
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            error
        })
    }
  
}

//get single category

export const singlecategoryController = async(req,res)=>{
    try {
        const category = await categorymodel.findOne({slug:req.params.slug})
        return res.status(200).send({
            succes:true,
            message:"category fetched successfully",
            category
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            succes:false,
            error
        })
    }
}

//delete-category controller

export const deletecategoryController = async(req,res)=>{
    try {
        const Category = await categorymodel.findOneAndDelete({slug:req.params.slug})
        return res.status(200).send({
            success:true,
            message:'Category deleted success fully'

        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            succes:false,
            error
        })
    }
}