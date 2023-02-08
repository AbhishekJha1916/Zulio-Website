// module.exports.actionName = function(req,res){}

module.exports.home = function (request, response) {
  console.log("Home controller action is working");
  return response.render("homeview", {
    title: "Home View",
  });
};

module.exports.about = function (request, response) {
  console.log("About action is working in the home controller");
  return response.render("about", {
    title: "About Us",
  });
};

module.exports.contact = function (request, response) {
  console.log("Contact action is working in the home controller");
  return response.render("contact", {
    title: "Contact Us",
  });
};

module.exports.products = function (request, response) {
  console.log("Products action is working in the home controller");
  return response.render("products", {
    title: "Our Products",
  });
};

module.exports.services = function (request, response) {
  console.log("Services action is working in the home controller");
  return response.render("services", {
    title: "Services",
  });
};
