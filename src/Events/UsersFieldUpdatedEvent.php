<?php

namespace Performing\Taskday\Users\Events;

use Taskday\Models\Card;
use Taskday\Models\Field;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UsersFieldUpdatedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $oldValue;

    public $newValue;

    public $field;

    public $card;

    public function __construct($oldValue, $newValue, Field $field, Card $card)
    {
        $this->oldValue = $oldValue;
        $this->newValue = $newValue;
        $this->field = $field;
        $this->card = $card;
    }
}
