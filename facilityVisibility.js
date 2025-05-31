document.addEventListener('DOMContentLoaded', () => {
    const facilityLink = document.getElementById("facilityContactLink");
    const aboutLink = document.getElementById("aboutLink");
  
    const selectedFacility = localStorage.getItem("selectedFacility");
    if (selectedFacility && selectedFacility.trim() !== "") {
        facilityLink.style.display = "block";
        aboutLink.style.display = "block";
      } else {
        facilityLink.style.display = "none";
        aboutLink.style.display = "none";
      }
      
  });
  