<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Demande De Contact</title>
</head>

<body>

    <body class="bg-gray-50 text-gray-800 font-sans">

        <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 class="text-3xl font-bold text-center text-indigo-600 mb-6">Demande de Contact</h1>

            <div class="mb-4">
                <p class="text-lg font-semibold">Nom:</p>
                <p class="text-gray-600">{{ $name }}</p>
            </div>

            <div class="mb-4">
                <p class="text-lg font-semibold">Email:</p>
                <p class="text-gray-600">{{ $email }}</p>
            </div>

            <div class="mb-4">
                <p class="text-lg font-semibold">Téléphone:</p>
                <p class="text-gray-600">{{ $phone ?? 'Non fourni' }}</p>
            </div>

            <div class="mb-4">
                <p class="text-lg font-semibold">Message:</p>
                <p class="text-gray-600">{{ $message }}</p>
            </div>

            <div class="mt-8 border-t pt-6 text-center">
                <p class="text-sm text-gray-500">Ce message a été envoyé via le formulaire de contact sur votre site web.</p>
            </div>
        </div>
    </body>

</html>
