<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'user_id'
    ];

    public static $rulesC = [
        'title'              => 'required',
        'description'       => 'nullable',
    ];

    public static $rulesU = [
        'title'              => 'nullable',
        'description'       => 'nullable',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
