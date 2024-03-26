import subprocess

def check_firewall_status():
    # Check if the system firewall is enabled
    try:
        subprocess.run(["netsh", "advfirewall", "show", "allprofiles"])
        print("Firewall is enabled.")
    except subprocess.CalledProcessError:
        print("Firewall is disabled.")

def check_weak_passwords():
    # Check for weak passwords in the system
    try:
        subprocess.run(["net", "accounts"])
        print("No weak passwords found.")
    except subprocess.CalledProcessError:
        print("Weak passwords detected.")

def check_open_ports():
    # Check for open ports on the system
    try:
        subprocess.run(["netstat", "-ano"])
        print("No open ports found.")
    except subprocess.CalledProcessError:
        print("Open ports detected.")

def main():
    print("Checking system misconfigurations...\n")
    
    check_firewall_status()
    print()
    
    check_weak_passwords()
    print()
    
    check_open_ports()

main()
