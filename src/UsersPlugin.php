<?php

namespace Performing\Taskday\Users;

use Taskday\Bundles\AssetBundle;
use Taskday\Base\Plugin;
use Performing\Taskday\Users\Fields\UsersField;

class UsersPlugin extends Plugin
{
    public string $handle = 'users';

    public string $description = '';

    function bundle(): ?AssetBundle
    {
        return new UsersAssetBundle();
    }

    public function fields(): array
    {
        return [
            new UsersField()
        ];
    }
}
