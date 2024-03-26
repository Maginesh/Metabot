import requests

def get_latest_patch(cve_id):
    # NVD API URL
    url = f"https://services.nvd.nist.gov/rest/json/cve/{cve_id}"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            cve_entry = data.get("result", {}).get("CVE_Items", [])[0]
            
            # Retrieve the latest patch version
            cve_description = cve_entry.get("cve", {}).get("description", {}).get("description_data", [])
            for desc in cve_description:
                if desc.get("lang", "") == "en":
                    latest_patch_version = desc.get("value", "")
                    break
            
            return latest_patch_version
        
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
    
    return True

# Example usage
cve_id = "CVE-2021-3456"
latest_patch = get_latest_patch(cve_id)
if latest_patch:
    print(f"The latest patch for {cve_id} is {latest_patch}.")
else:
    print(f"Unable to retrieve the latest patch for {cve_id}.")
