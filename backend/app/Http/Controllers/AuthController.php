<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use http\Exception;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{

    public function login(Request $request) {
        $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|between:6,25'
        ]);

        if(!Auth::attempt($login)) {
            return response()->json([
                'error' => [
                    'code' => 'Invalid credentials!'
                ]
            ]);
        }

        $accessToken = Auth::user()->createToken('authToken')->accessToken;
        return response([
            'success' => true,
            'user' => Auth::user(),
            'api_token' => $accessToken
        ]);
    }

    public function logout(Request $request) {
        Auth::user()->token()->revoke();

        return response()->json([
            'success' => true,
        ]);
    }
}
