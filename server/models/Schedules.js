const mongoose= require("mongoose");

const schedulesSchema = new mongoose.Schema({
    priorityQueue : [{
        schedulingFactor: Number, 
        caseID: {type: String}
    }],
})

const Schedule = mongoose.model("Schedule", schedulesSchema);

module.exports = Schedule;