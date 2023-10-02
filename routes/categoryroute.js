import express from 'express'
import { requireSignin } from "../middleware/authmiddleware.js";
import { createcategoryController } from '../controller/categoryController.js';
import { isAdmin } from '../middleware/authmiddleware.js';
import { updatecategoryController } from '../controller/categoryController.js';
import { getcategoriesController } from '../controller/categoryController.js';
import { singlecategoryController } from '../controller/categoryController.js';
import { deletecategoryController } from '../controller/categoryController.js';
const router = express.Router();


//Create-Category Route


router.post('/create-category',requireSignin,isAdmin,createcategoryController)

//Update-Category Route

router.put('/update-category/:id',requireSignin,isAdmin,updatecategoryController)

//get-categories Route

router.get('/get-categories',getcategoriesController)

//single-category Route

router.get('/single-category/:slug',singlecategoryController)

//delete-category Route

router.delete('/delete-category/:slug',requireSignin,isAdmin,deletecategoryController)

export default router