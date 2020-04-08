'use strict';

const {serviceAService} = require('./services');

class ServiceAController {
  static async getName(req, res, next) {
    try {
      // const ENTERPRISEID = req.ENTERPRISEID;
      // const {Key} = req.params;
      // const {Nbr} = req.query;
      // const {type, options, enterpriseIds} = req.body;
      const result = await serviceAService.getName();
      res.status(200).json({
        data: result
      });
    } catch (err) {
      next(new Error(err));
    }
  }

}

module.exports = ServiceAController;
