

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: 
      // be sure to include its associated Product data
      {
        model: Product,
        attributes: [ 'product_name'],
        as: 'tag_product_id', 
        }
  
  }).then((dbPost) =>
  res.json(dbPost))
.catch((err )=> {
  console.log(err);
  res.status(400).json(err);
});
});



router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id:req.params.id
    },
    // be sure to include its associated Product data
    include: {
      model: Product,
      attributes: [ 'product_name'],
      as: 'tag_product_id',
    }
  }).then((dbPost) =>
  res.json(dbPost))
.catch((err )=> {
  console.log(err);
  res.status(400).json(err);
});
});



router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((dbPost) =>
    res.json(dbPost))
  .catch((err )=> {
    console.log(err);
    res.status(400).json(err);
  });
});






router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },{
    where: {
      id: req.params.id
    }
  }).then((dbPost) =>
  res.json(dbPost))
.catch((err )=> {
  console.log(err);
  res.status(400).json(err);
});
});






router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((dbPost) =>
  res.json(dbPost))
.catch((err )=> {
  console.log(err);
  res.status(400).json(err);
});
});
module.exports = router;





//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
    


//   });
// });

// router.put("/:id", (req, res) => {
//   // update a tag's name by its `id` value
//   Tag.update(req.res, {
//     where: {
//       id: req.params.id,
//     }
//   })
//   .then((dbTagData) => res.json(dbTagData))
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// router.delete("/:id", (req, res) => {
//   // delete on tag by its `id` value
//   Tag.destroy(req.res,  {
//     where: {
//       id: req.params.id,
//     },
//   })
//   .then((dbTagData) => res.json (dbTagData))
//   .catch((err) =>{
//     console.log(err);
//     res.status(500).json(err);
//   })
// });

// module.exports = router;


// const router = require("express").Router();

// const { Tag, Product, ProductTag } = require("../../models");

// // The `/api/tags` endpoint

// router.get("/", (req, res) => {
//   //find all tags
//   tag.findAll({
//     include: [
//       Product,
//       {
//         model: Tag,
//         through: ProductTag,
//         as: 'product_tag_id'
//       }
//     ]
//   })
//   .then((dbTagData) => res.json(dbTagData))
//   .catch((err) =>{
//     console.log(err);
//     res.status(400).json(err);


//   });
// });
// // be sure to include its associated Product data

// router.get("/:id", (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   Tag.findOne(
//     {
//       where: {
//         id: req.params.id,
//       },
//     },
//     {
//       include: [
//         Product,
//         {
//           model: Tag,
//           through: ProductTag,
//           as: 'product_tag_id',
//         },
//       ],
//     }
//   )
//     .then((dbTagData) => res.json(dbTagData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.post("/", (req, res) => {
//   // create a new tag
//   Tag.create(req.body, {

//     //?????????????????????????????not sure
//     where:{
//       id: req.params.id,
//     },
//     })
//     .then((dbTagData) => res.json (dbTagData))
