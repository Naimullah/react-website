<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function Laravel\Prompts\error;

class AuthController extends Controller
{
    public function authenticate(Request $request){
        $validator=Validator::make($request->all(),[
        'email'=>'required|all',
        'password'=>'required'
        ]);
        if($validator->failed()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->errors()
            ],400);
        }
        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
           $user=User::find(Auth::user()->id);
           if($user->role=='admin'){
               $token=$user->createToken('token')->plainTextToken;
               return response()->json([
                'status'=>200,
                'toke'=>$token,
                'id'=>$user->id,
                'name'=>$user->name,
            ],200);
           }
           else{
            return response()->json([
                'status'=>401,
                'message'=>'You are not authorized access to admin panel yes'
            ],401);
           }
        }
        else{
            return response()->json([
                'status'=>401,
                'message'=>'Either email or password is incorrect'
            ],401);
        }
    }
}
