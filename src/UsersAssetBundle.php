<?php

namespace Performing\Taskday\Users;

use Taskday\Bundles\AssetBundle;

class UsersAssetBundle extends AssetBundle
{
    public function scripts(): array
    {
        return [
            __DIR__ . '/../dist/taskday-users.es.js',
        ];
    }

    public function styles(): array
    {
        return [];
    }
}
