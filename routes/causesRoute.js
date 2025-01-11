import express from "express"
import { contributeToCauseController, deleteCauseByIdController, getAllCausesController, getCauseByIdController, postNewCauseController, updateCauseByIdController } from "../controllers/causesController.js"
import { validateContributionReq } from "../middleware/validateContributionReq.js"
import { validateID } from "../middleware/validateID.js"
const router = express.Router()





/**
 * @route GET /
 * @description Retrieve all causes
 * @returns {Array} List of all causes
 * @status 200 - Success
 * @status 500 - Server Error
 */
router.get('/', getAllCausesController)



/**
 * @route POST /
 * @description Create a new cause
 * @param {Object} req.body - Request body with fields title, description, image_url
 * @returns {Object} Response with the created cause details
 * @status 201 - Created
 * @status 500 - Server Error
 */
router.post('/', postNewCauseController)




/**
 * @route GET /:id
 * @description Retrieve a specific cause by ID
 * @param {String} req.params.id - ID of the cause to retrieve 
 * @returns {Object} - {id, title, description, image_url}
 * @status 200 - Success
 * @status 500 - Server Error
 */
router.get('/:id', validateID, getCauseByIdController)




/**
 * @route PUT /:id
 * @description Update a specific cause
 * @param {String} req.params.id - ID of the cause to update
 * @param {Object} req.body - Updated cause fields
 * @returns {Object} The updated cause details
 * @status 200 - Success
 * @status 500 - Server Error
 */
router.put('/:id', validateID, updateCauseByIdController)




/**
 * @route DELETE /:id
 * @description Delete a cause by ID
 * @param {String} req.params.id - ID of the cause to delete
 * @returns {Object} Confirmation of deletion
 * @status 200 - Success
 * @status 500 - Server Error
 */
router.delete('/:id', validateID, deleteCauseByIdController)




/**
 * @route POST /:id/contribute
 * @description Accept contributions to a specific cause
 * @param {String} req.params.id - ID of the cause to contribute to
 * @param {Object} req.body - Contribution fields: name, email, amount
 * @returns {Object} Details of the contribution
 * @status 200 - Success
 * @status 500 - Server Error
 */
router.post('/:id/contribute', validateID, validateContributionReq, contributeToCauseController)




export { router as causesRouter}