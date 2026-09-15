---
title: "Building Flutter 2FA: Adding Two-Factor Authentication to Mobile Apps"
date: "2023-08-14"
description: "How I built the open-source flutter_2fa package for seamless two-factor authentication using Firebase & Firestore."
tags: ["Flutter", "Dart", "Firebase", "Security", "Open Source"]
readTime: "6 min read"
---

Have you ever had to build secure authentication for a Flutter mobile application and found yourself overwhelmed by the repetitive boilerplate of OTP generation, secret verification, QR code rendering, and state management? Or maybe you just wanted a plug-and-play solution that didn't lock you into a rigid UI? I am happy to let you know that your security headaches are over 😄!

In this technical write-up, I will be walking you through **`flutter_2fa`** — an open-source Flutter package I architected and published on Pub.dev to make integrating Two-Factor Authentication (2FA) effortless for mobile developers.

`flutter_2fa` provides a modular, lightweight, and highly customizable security layer powered by Firebase & Firestore backing. It supports all standard authenticator apps like **Google Authenticator**, **Authy**, **Microsoft Authenticator**, and **1Password**.

---

### Key Features of `flutter_2fa`:

- **Seamless Firebase & Firestore Integration**: Encrypts and securely syncs TOTP secret tokens across user devices.
- **Native QR Code Generator**: Automatically generates scannable QR codes and raw secret keys for manual entry.
- **Zero UI Lock**: Comes with pre-styled dialogs for rapid prototyping while offering headless logic hooks for custom branding.
- **Time-based OTP (TOTP) Verification**: RFC 6238 compliant token generation and validation.
- **Cross-Platform Compatibility**: Tested and verified across iOS, Android, and Web Flutter targets.

And guess what? **IT IS ENTIRELY OPEN SOURCE** 😄! Whether you are building a FinTech app, a healthcare platform, or an internal enterprise tool, this guide will walk you through how to integrate 2FA in 4 easy steps.

---

### NOW, LET'S GET INTO IT!

#### Step 1: Install the Package
Add `flutter_2fa` to your `pubspec.yaml` dependencies:

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_2fa: ^1.0.2
  firebase_core: ^2.15.0
  cloud_firestore: ^4.8.3
```

Run `flutter pub get` in your terminal. EASY YEAH 😄!

#### Step 2: Initialize 2FA Configuration
Configure the 2FA instance with your app identity and the authenticated user's email address during user setup:

```dart
import 'package:flutter_2fa/flutter_2fa.dart';

void setupSecurity(String userEmail) {
  Flutter2FA.configure(
    appName: "SeedTree",
    userEmail: userEmail,
  );
}
```

#### Step 3: Render QR Code for Authenticator Pairing
When a user decides to enable 2FA in their account settings, trigger the setup modal or render the built-in `Flutter2FAQRCode` widget:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_2fa/flutter_2fa.dart';

class TwoFactorSetupScreen extends StatelessWidget {
  final String secretKey = Flutter2FA.generateSecret();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Enable 2FA Security")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Scan this QR code with Google Authenticator:"),
            SizedBox(height: 16),
            Flutter2FAQRCode(
              secret: secretKey,
              appName: "SeedTree App",
              userEmail: "developer@seedtree.com",
            ),
            SizedBox(height: 16),
            SelectableText("Secret Key: $secretKey"),
          ],
        ),
      ),
    );
  }
}
```

#### Step 4: Verify OTP Token on Login
When a user attempts to sign in, prompt them for their 6-digit TOTP code and verify it using `Flutter2FA.verifyToken`:

```dart
bool isTokenValid = Flutter2FA.verifyToken(
  secret: storedUserSecret,
  otpToken: userEnteredOTPCode,
);

if (isTokenValid) {
  // Grant session access and navigate to dashboard
  Navigator.pushReplacementNamed(context, '/dashboard');
} else {
  // Show authentication error toast
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text("Invalid OTP code. Please try again.")),
  );
}
```

Viola! Your app is now protected with enterprise-grade TOTP Two-Factor Authentication!

---

### Beyond the Basics: Security Considerations

- **Secret Key Storage**: Always ensure user secret keys stored in Cloud Firestore are encrypted using AES-256 before write operations.
- **Backup Recovery Codes**: Provide users with one-time backup recovery codes during setup in case they lose access to their primary authenticator device.

You can inspect the full source code, contribute features, or file issues on [GitHub](https://github.com/Hipheckts/Flutter-2FA) or grab the package directly on [Pub.dev](https://pub.dev/packages/flutter_2fa). Give it a spin in your next Flutter project!
