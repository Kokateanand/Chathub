<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptchaSecret = 'security key her';
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    
    // Make a POST request to Google's reCAPTCHA server for validation
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];
    
    // Use cURL or file_get_contents to send the request
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    $responseData = json_decode($verify);
    
    // Check if reCAPTCHA is successfully verified
    if ($responseData->success) {
        // Continue with form processing (e.g., send email, save to DB)
    } else {
        // reCAPTCHA validation failed, handle the error
    }
}
?>
