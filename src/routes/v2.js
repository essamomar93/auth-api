"use strict";

const express = require("express");
const bearer = require("../middleware/bearer");
const router = express.Router();
const acl = require("../middleware/acl");

router.get("/:model", bearer, acl("read"), (req, res) => {
  res.status(200).send("this is new data");
});
router.post("/:model", bearer, acl("create"), (req, res) => {
  res.status(200).send("new data was created");
});

router.put("/:model/:id", bearer, acl("update"), (req, res) => {
  res.status(200).send("the data was updated");
});

router.patch("/:model/:id", bearer, acl("update"), (req, res) => {
  res.status(200).send("the data was updated");
});

router.delete("/:model/:id", bearer, acl("delete"), (req, res) => {
    res.status(200).send("the data was deleted");
  });

module.exports=router