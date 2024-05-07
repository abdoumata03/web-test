import Doctor from "../Models/medecins.js";

export async function create(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Doctor content cannot be empty",
    });
  }

  var doctor = new Doctor({
    name: req.body.name,
    wilaya: req.body.wilaya,
    commune: req.body.commune,
  });

  try {
    await doctor.save();
    res.send({
      message: "Doctor was created successfully!",
      doctor: doctor,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Doctor.",
    });
  }
}

export async function findAll(req, res) {
  try {
    const doctors = await Doctor.find();
    res.send(doctors);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving doctors.",
    });
  }
}

export async function searchByName(req, res) {
  const name = req.query.name;
  try {
    const doctors = await Doctor.find({
      name: { $regex: new RegExp(name, "i") },
    });
    res.send(doctors);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving doctors.",
    });
  }
}
export async function searchByWilaya(req, res) {
  const wilaya = req.query.wilaya;
  try {
    const doctors = await Doctor.find({
      wilaya: { $regex: new RegExp(wilaya, "i") },
    });
    res.send(doctors);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving doctors.",
    });
  }
}