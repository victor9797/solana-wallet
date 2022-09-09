const { Router } = require("express");
const router = Router();
const WalletController = require("../../controllers/WalletController");

router.get("/", async function (req, res) {
  await WalletController.fetch(req, res);
});

module.exports = router;