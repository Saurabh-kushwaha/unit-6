const getAll = (model) => async ( req, res) => {
    const item = await model.find();
    res.status(200).json(item);
};
const getOne = (model) => async ( req, res) => {
    const item = await model.findById(req.params.id);
    res.status(200).json(item);
};
const createOne = (model) => async ( req, res) => {
    const item = await model.create(req.body);
    res.status(201).json(item);
};
const updateOne = (model) => async ( req, res) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(item);
};
const deleteOne = (model) => async ( req, res) => {
    const item = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(item);
};

module.exports = (model) => ({
    getAll: getAll(model),
    getOne: getOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
    deleteOne: deleteOne(model)
});