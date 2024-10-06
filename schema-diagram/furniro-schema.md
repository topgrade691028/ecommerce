# Furniro's Schema
users [icon: user, color: blue] {
  uid string pk
  first_name string
  last_name string
  email email
  image url
  isActive boolean
  isVerified boolean
  createdAt datetime
  deletedAt datetime
  products string fk
}

product [color: green] {
  id string pk
  name string
  price positive number
  rating string fk
  sizeType string
  color string
  category string fk
  createdAt datetime
  deletedAt datetime
  tags string fk
  description string
  additionalInformation string
  imageLinks string fk
  generalDetail string fk
  productDetails string fk
  dimension string fk
  Warranty string fk
  review string fk
}

generalDetail [color: purple] {
  id string pk
  salesPackage string
  modelNumber string
  secondaryMaterial string
  configuration string
  upholsteryMaterial string
  UpholsteryColor string
}
productDetails [color: red] {
  id string pk
  FillingMaterial string
  FinishType string
  AdjustableHeadrest boolean
  MaximumLoadCapacity number
  OriginofManufacture string
}
dimension [color: white]{
  id string pk
  Width number
  Height number
  Depth number
  Weight number
  SeatHeight number
  LegHeight number
}
Warranty [color: yellow]{
  id string pk
  WarrantySummary string
  WarrantyServiceType string
  CoveredinWarranty string
  NotCoveredinWarranty string
  DomesticWarranty string
}

cart [color: orange] {
  id string pk
  users string fk
  products string fk
}

ImageLinks [color: red] {
  id string pk
  url string
  uploadedBy string fk
}

Ratings [color: blue] {
  id string pk
  value number 
  ratedBy string fk
}

Category [color: black] {
  id string pk
  name string
}
Tags [color: green] {
  id string pk
  name string
}
Review [color: orange]{
  id string pk
  reviewBy string fk
  message string
  createdAt datetime
}
upholsteryMaterial [color: brown] {
  id string pk
  materialName string
}

FillingMaterial [color: gray] {
  id string pk
  materialName string
}
WarrantyServiceType [color: purple] {
  id string pk
  typeName string
}

users.products <> product.id
cart.users - users.uid
cart.products < product.id
product.generalDetail > generalDetail.id
product.productDetails > productDetails.id
product.dimension > dimension.id
product.Warranty > Warranty.id
product.imageLinks - ImageLinks.id
ImageLinks.uploadedBy - users.uid
product.rating < Ratings.id
Ratings.ratedBy - users.uid
product.category < Category.id
product.tags < Tags.id
product.review < Review.id
generalDetail.upholsteryMaterial > upholsteryMaterial.id
productDetails.FillingMaterial > FillingMaterial.id
Warranty.WarrantyServiceType > WarrantyServiceType.id