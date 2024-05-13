<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Contact;
use App\Services\ContactService;
use Illuminate\Support\Facades\Log; // criar logs

use App\Http\Requests\ContactStoreRequest;

class ContactController extends Controller
{
    private $contactService; // Declarar a variável para o service

    public function __construct(ContactService $contactService) // Injetar a dependência
    {
        $this->contactService = $contactService;
    }

    
    public function store (ContactStoreRequest $request)
    { 
       
        // Verificação do reCAPTCHA no lado do servidor com biscolab/laravel-recaptcha
        $response = Recaptcha::verify($request->input('recaptchaToken'));

         if ($response->isSuccess()) {

            
         }

        try {
    
            Log::info("Recebendo: ", $request->all());

            // Create the contact using the service
            $response = $this->contactService->createContact($request);

            Log::info("Executado: ". $response);

            return to_route('site.index')->with('message', 'Sua mensagem foi enviada com sucesso!');
            
        } catch (\Exception $e) {

            Log::error($e->getMessage(), $e);

            return to_route('site.index')->with('error', 'Sua mensagem nao foi enviada ligue 21-21-98176-0591!'); 
        }
    }
}
