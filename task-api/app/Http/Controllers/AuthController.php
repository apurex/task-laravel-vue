<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    
    public function register(Request $request) 
    {
        
        $this->validate($request, User::$rulesC);

        $inputs = $request->all();
        $inputs['password'] = Hash::make($request->password);

        $user = User::create($inputs);

        $data = [
            'user' => $user,
            'token' => $user->createToken('shopitoken')->plainTextToken
        ];

        return $this->successResponse($data);

    }

    /**
     * Login user
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $data = [
            'user' => $user,
            'token' => $user->createToken('shopitoken')->plainTextToken
        ];

        return $this->successResponse($data);
    }

    public function index()
    {
        $users = User::all();

        return $this->successResponse($users);
    }

}
