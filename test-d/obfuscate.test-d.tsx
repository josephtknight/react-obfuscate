import React from 'react';
import Obfuscate from '../obfuscate';

<>

    <Obfuscate email="john.doe@example.com" />;

    <Obfuscate
        email="hello@coston.io"
        headers={{
            cc: 'dade@zero-cool.af',
            bcc: 'smith@machina.net',
            subject: 'react-obfuscate',
            body: 'Down with the machines!',
        }}
    />

    <Obfuscate tel="555-555-5555" />;

    <Obfuscate sms="555-555-5555" />;

    <Obfuscate facetime="15555555555" />;

    <Obfuscate href="https://example.com" />;
    
    <Obfuscate element="p" style={{ textAlign: 'left' }}>
        This paragraph is more secret than others.
    </Obfuscate>

    <Obfuscate email="hello@coston.io" aria-label="Email Me">
        <svg width={24} height={21}>
            <path
            fill="#000"
            d="M12 12.713L.0 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5"
            />
        </svg>
    </Obfuscate>

    <Obfuscate
        email="john.doe@example.com"
        headers={{ 
            cc: 'dade@zero-cool.af',
            bcc: 'smith@machina.net',
            subject: 'react-obfuscate',
            body: 'Down with the machines!',
        }}
    />
</>