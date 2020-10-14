//@descrip:     Get all bootcamps
//@route:       GET /api/v1/bootcamps
//@access:      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: "Show all bootcamps", hello: req.hello});
}

//@descrip:     Get single bootcamps
//@route:       GET /api/v1/bootcamps/:id
//@access:      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
}

//@descrip:     Create new bootcamp
//@route:       POST /api/v1/bootcamps/
//@access:      Private
exports.creaetBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create new bootcamp"});
}

//@descrip:     Update bootcamp
//@route:       PUT /api/v1/bootcamps/:id
//@access:      Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

//@descrip:     Delete  bootcamp
//@route:       DELETE /api/v1/bootcamps/:id
//@access:      Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}