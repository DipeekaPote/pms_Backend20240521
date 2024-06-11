const express = require('express')
const router = express.Router()

const { getPipelines, getPipeline, createPipeline, updatePipeline, deletePipeline, getPipelineTemplateList} = require('../../controllers/Workflow/pipelineTemplateController')
const { createJobTemplate, getJobTemplate, getJobTemplates, deleteJobTemplate, updateJobTemplate, getJobTemplateList} = require('../../controllers/Workflow/jobTemplateController')
const { createJob, getJobs, getJob, deleteJob, updateJob, getJobList, getJobListbyid, updatestgeidtojob} = require('../../controllers/Workflow/jobController')
const pipelinedata= require('../../controllers/Workflow/boardsDataController'); // Assuming 'boardsData.js' is where you defined your 'boardsDataSchema'
const { getEmailTemplates,createEmailTemplate,getEmailTemplate,deleteEmailTemplate, updateEmailTemplate,getEmailTemplateList } = require('../../controllers/Workflow/emailTemplateController')
const { getChatTemplates, getChatTemplate, getChatTemplateList, createChatTemplate, deleteChatTemplate, updateChatTemplate } = require('../../controllers/Workflow/chatTemplateController')
const { getInvoiceTemplates, getInvoiceTemplate, createInvoiceTemplate, deleteInvoiceTemplate, updateInvoiceTemplate } = require('../../controllers/Workflow/invoiceTemplateController')
const { getCategorys, getCategory, createCategory, deleteCategory, updateCategory } = require('../../controllers/Workflow/categoryController')
const { getServiceTemplates, getServiceTemplate, createServiceTemplate, deleteServiceTemplate, updateServiceTemplate, getServiceTemplateById } = require('../../controllers/Workflow/serviceTemplateController')
const { getInvoices, getInvoice, createInvoice, deleteInvoice, updateInvoice, getInvoiceList, getInvoiceListbyid } = require('../../controllers/Workflow/invoiceController')
const { getOrganizerTemplate, getOrganizerTemplates, createOrganizerTemplate } = require('../../controllers/Workflow/organizerTempController')


//*******************Pipeline START********************* */

router.get('/pipeline', getPipelines)
router.get('/pipeline/:id', getPipeline)
router.post('/pipeline', createPipeline)
router.delete('/pipeline/:id', deletePipeline)
router.patch('/pipeline/:id', updatePipeline)
router.get('/pipeline/pipelinelist/:id', getPipelineTemplateList)

//*******************Pipeline END********************* */


//*******************job START********************* */

router.get('/job', getJobs)
router.get('/job/:id', getJob)
router.post('/job', createJob)
router.delete('/job/:id', deleteJob)
router.patch('/job/:id', updateJob)
router.get('/job/joblist/list', getJobList)
router.get('/job/joblist/listbyid/:id', getJobListbyid)
router.post('/job/jobpipeline/updatestageid/:id', updatestgeidtojob)

//*******************job END********************* */


//*******************job  Template START********************* */

router.get('/jobtemplate', getJobTemplates)
router.get('/jobtemplate/:id', getJobTemplate)
router.post('/jobtemplate', createJobTemplate)
router.delete('/jobtemplate/:id', deleteJobTemplate)
router.patch('/jobtemplate/:id', updateJobTemplate)
router.get('/jobtemplate/jobtemplatelist/:id', getJobTemplateList)


//*******************jobtemplate END********************* */y

router.get('/pipeline/boardsData/:id', pipelinedata);

//*******************Email emplate Start********************* */

router.get('/emailtemplate', getEmailTemplates)
router.get('/emailtemplate/:id', getEmailTemplate)
router.get('/emailtemplate/emailtemplateList/:id', getEmailTemplateList)
router.post('/emailtemplate', createEmailTemplate)
router.delete('/emailtemplate/:id', deleteEmailTemplate)
router.patch('/emailtemplate/:id', updateEmailTemplate)

//*******************Email template END********************* */


//*******************Chat emplate Start********************* */

router.get('/chattemplate', getChatTemplates)
router.get('/chattemplate/:id', getChatTemplate)
router.get('/chattemplate/chattemplateList/:id', getChatTemplateList)
router.post('/chattemplate', createChatTemplate)
router.delete('/chattemplate/:id', deleteChatTemplate)
router.patch('/chattemplate/:id', updateChatTemplate)

//*******************chat template END********************* */

//******Invoice template START******** */
router.get('/invoicetemplate', getInvoiceTemplates)
router.get('/invoicetemplate/:id', getInvoiceTemplate)
router.post('/invoicetemplate', createInvoiceTemplate)
router.delete('/invoicetemplate/:id', deleteInvoiceTemplate)
router.patch('/invoicetemplate/:id', updateInvoiceTemplate)

//******Invoice template END******** */

//******Category  START******** */
router.get('/category', getCategorys)
router.get('/category/:id', getCategory)
router.post('/category', createCategory)
router.delete('/category/:id', deleteCategory)
router.patch('/category/:id', updateCategory)

//******Category END******** */

//******Category  START******** */
router.get('/servicetemplate', getServiceTemplates)
router.get('/servicetemplate/:id', getServiceTemplate)
router.post('/servicetemplate', createServiceTemplate)
router.delete('/servicetemplate/:id', deleteServiceTemplate)
router.patch('/servicetemplate/:id', updateServiceTemplate)
router.get('/servicetemplate/servicetemplatebyid/:id', getServiceTemplateById)
//******Category END******** */

//******Invoice START******** */

router.get('/invoice', getInvoices)
router.get('/invoice/:id', getInvoice)
router.post('/invoice', createInvoice)
router.delete('/invoice/:id', deleteInvoice)
router.patch('/invoice/:id', updateInvoice)
router.get('/invoice/invoicelist', getInvoiceList)
router.get('/invoice/invoicelist/invoicelistbyid/:id', getInvoiceListbyid)

//******Invoice END******** */

//******organizertemplate Start******** */

router.get('/organizertemplate', getOrganizerTemplates)
router.get('/organizertemplate/:id', getOrganizerTemplate)
router.post('/organizertemplate', createOrganizerTemplate)

//******organizertemplate END******** */


module.exports = router
