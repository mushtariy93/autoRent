const { errorHandler } = require("../helpers/error_handler");
const client = require("../schemas/client");

const addClient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    } = req.body;
    const newClient = await client.create({
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    });
    res
      .status(201)
      .send({ message: "New Client added successfully!", newClient });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await client.find();
    res.send(clients);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateClientById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    } = req.body;
    const updated_client = await client.findByIdAndUpdate(id, {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    });
    if(!updated_client){
        res.status(404).send({statuscode: 404, message: "Cient not found!"})
    }
    res.status(200).send({
        statuscode: 200,
        message: "Client deleted successfully!",
        data: updated_client
    })
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteClientById = async(req, res) => {
    try {
    const {id} = req.params.id;
    const {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    } = req.body;
    const deleted_client = await client.findByIdAndDelete(id, {
      first_name,
      last_name,
      birthday,
      passport,
      driver_license,
      address,
      phone,
    });
if(!deleted_client){
    res.status(404).send({statuscode: 404, message: "Client not found!"})
}
res.status(200).send({statuscode: 200, message: "Client deleted successfully!", data: deleted_client})
} catch (error) {
        errorHandler(res, error)
    }
    
}

module.exports = {
  addClient,
  getClients,
  updateClientById,
  deleteClientById
}
