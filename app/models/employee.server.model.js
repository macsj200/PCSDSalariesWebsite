'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
	name: {
		type: String,
        unique:true,
		default: '',
		required: 'Please fill Employee name',
		trim: true
	},
    position:{},
    department: {},
    grossCompensation:{},
	added: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Employee', EmployeeSchema);