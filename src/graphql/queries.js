/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDetails = /* GraphQL */ `
  query GetDetails($id: ID!) {
    getDetails(id: $id) {
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
export const listDetailss = /* GraphQL */ `
  query ListDetailss(
    $filter: ModelDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
