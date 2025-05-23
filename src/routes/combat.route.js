const controller = require("../controllers/combat.controller.js")

const { validateSession, isStaff, isAdmin, isLeader } = require("../middleware/session.middleware.js")
const route = require("express").Router()

route.get("/swordplayer/:id_player", controller.getAllCombatsFromPlayer)
route.get("/clan/:id_clan", validateSession, isLeader, controller.getCombatsByClanId)
route.get("/search/:swp1/:swp2", validateSession, isStaff, controller.getCombatBySwordplayers)
route.get("/:id", validateSession, isStaff, controller.getCombatById)
route.get("/", validateSession, isStaff, controller.getAllCombats)

route.post("/new", validateSession, isStaff, controller.postCombat)

route.patch("/:id", validateSession, isAdmin, controller.patchCombatById)

route.delete("/:id", validateSession, isAdmin, controller.deleteCombatById)

module.exports = route