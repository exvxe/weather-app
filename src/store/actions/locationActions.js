export const setLocation = (location, locationType) => {
    return  {
        type: 'SET_LOCATION',
        location,
        locationType
    }   
}