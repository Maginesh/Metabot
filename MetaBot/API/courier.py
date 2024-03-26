# Install Courier SDK: pip install trycourier
from trycourier import Courier


def alert(email: str, id: str):
    client = Courier(auth_token="pk_prod_KBS7Y8PR7E4JDCQ3JYSR79T30CPX")

    resp = client.send_message(
        message={
            "to": {
                "email": email,
            },
            "template": "48AGP6AADCMCT5P09HDHHSX2RK79",
            "data": {
                "id": id,
            },
        }
    )

    print("alert sent")
