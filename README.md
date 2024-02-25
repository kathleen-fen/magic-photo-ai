# Magic Photo AI

This API uses https://replicate.com/tencentarc/photomaker-style model.

AUth guard is not connected yet

/signUp POST

Payload:
{
email: string,
password: string
}

/access-key POST

Payload:
{  
email: string,  
password: string  
}

/magic-image POST

Payload:
{  
prompt: string, (is taken from replicate)  
base64_img: string (you can use https://www.base64-image.de/ to transform binary image to base64 string)  
}

Postgres database is needed
