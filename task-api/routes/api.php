<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('users', [AuthController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('taks')->group(function () {

    Route::prefix('crud')->group(function () {
        Route::get('/',             [TaskController::class, 'index']);
        Route::post('/',            [TaskController::class, 'store']);
        Route::get('{task}',    [TaskController::class, 'show']);
        Route::put('{task}',    [TaskController::class, 'update']);
        Route::patch('{task}',  [TaskController::class, 'update']);
        Route::delete('{task}', [TaskController::class, 'destroy']);
    });

});