/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      residential
      publicHousing
      commercial
      industrial
      coverPhoto
      location
      parking
      lease
      name
      propertyDetailsID
      propertyDetails {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorPlan
        designPlan
        map
        valuation
        startingBid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      residential
      publicHousing
      commercial
      industrial
      coverPhoto
      location
      parking
      lease
      name
      propertyDetailsID
      propertyDetails {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorPlan
        designPlan
        map
        valuation
        startingBid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      residential
      publicHousing
      commercial
      industrial
      coverPhoto
      location
      parking
      lease
      name
      propertyDetailsID
      propertyDetails {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorPlan
        designPlan
        map
        valuation
        startingBid
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDetails = /* GraphQL */ `
  mutation CreateDetails(
    $input: CreateDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    createDetails(input: $input, condition: $condition) {
      id
      saleableArea
      grossArea
      buildingAge
      propertyDirection
      propertyView
      photos
      video
      VR
      floorPlan
      designPlan
      map
      valuation
      startingBid
      createdAt
      updatedAt
    }
  }
`;
export const updateDetails = /* GraphQL */ `
  mutation UpdateDetails(
    $input: UpdateDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    updateDetails(input: $input, condition: $condition) {
      id
      saleableArea
      grossArea
      buildingAge
      propertyDirection
      propertyView
      photos
      video
      VR
      floorPlan
      designPlan
      map
      valuation
      startingBid
      createdAt
      updatedAt
    }
  }
`;
export const deleteDetails = /* GraphQL */ `
  mutation DeleteDetails(
    $input: DeleteDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    deleteDetails(input: $input, condition: $condition) {
      id
      saleableArea
      grossArea
      buildingAge
      propertyDirection
      propertyView
      photos
      video
      VR
      floorPlan
      designPlan
      map
      valuation
      startingBid
      createdAt
      updatedAt
    }
  }
`;
