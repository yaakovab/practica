module.exports = {
  up: async (queryInterface, Sequelize) => {
    // ✅ Best Practice: Seed only metadata and not test record, read "Dealing with data" section for further information
    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          name: "Italy",
        },
        {
          name: "USA",
        },
        {
          name: "India",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {},
};
