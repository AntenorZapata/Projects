db.trips.aggregate([{ $group: { _id: { $dayOfWeek: "$startTime" }, sum: { $sum: 1 } } }, { $project: { _id: 0, diaDaSemana: "$_id", total: "$sum" } },
  { $sort: { total: -1 } }, { $limit: 1 }]);
