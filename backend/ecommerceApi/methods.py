from django.core.mail import EmailMessage, get_connection
from django.conf import settings


def sendEmailBuy(data):
    with get_connection(
        host=settings.EMAIL_HOST,
        port=settings.EMAIL_PORT,
        username=settings.EMAIL_HOST_USER,
        password=settings.EMAIL_HOST_PASSWORD,
        use_tls=settings.EMAIL_USE_TLS
    ) as connection:
        subject = "test Subject"
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["manuelfernandobedoya@gmail.com", ]
        message = "test message"
        EmailMessage(subject, message, email_from,
                     recipient_list, connection=connection).send()
    print("compra hecha")
