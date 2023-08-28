from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.conf import settings


def sendEmailBuy(data):

    # Email To Customer
    subject = 'Estamos revisando tu pedido'
    template = get_template('buyPendingEmail.html')

    content = template.render({
        'name': data['userData']['name'].split()[0]
    })

    message = EmailMultiAlternatives(subject,
                                     "Test",
                                     settings.EMAIL_HOST_USER,
                                     ["manuelfernandobedoya@gmail.com"])

    message.attach_alternative(content, 'text/html')
    message.send()

# Email To Me
    message_two = EmailMultiAlternatives("Nueva Venta",
                                         str(data),
                                         settings.EMAIL_HOST_USER,
                                         [settings.EMAIL_HOST_USER])
    message_two.send()

    print("compra hecha")
