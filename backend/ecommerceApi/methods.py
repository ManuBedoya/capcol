from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.template.loader import render_to_string, get_template
from django.conf import settings


def sendEmailBuy(data):

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
    print("compra hecha")
