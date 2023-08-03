const getByNameProduct=require("../../controllers/productos/getNameProduct");

const getByNameProductHandler= async (req,res)=>{
    try {
        const {name}=req.query;
        const data=await getByNameProduct(name);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}
module.exports=getByNameProductHandler