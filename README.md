Description
-----------

FAQ Field module provides a field for frequently asked questions.
Added, you can create simple but smooth FAQs on any piece of content.


Installation
-------------

Install as usual, see https://backdropcms.org/user-guide/modules for further information.

Alternatively, if you have [Brush](https://github.com/backdrop-contrib/brush) installed, then just run on CLI:
```
brush -y en faqfield
```

Configuration
-------------
  Add the field to any entity (eg. content type, users, ..) as usual.
  On the fields settings you can choose what kind of answer input widget should
  be used and how it should be filtered. If you choose a formatable textarea
  you can configure the default filter by the default value preview on the field
  settings page and there are several advanced options you can make use of.

  You have the choice of the following display formatters:

  - Accordion (jQuery JavaScript animated show / hide)
  - Simple text (none formatted, simple output for custom theming)
  - Definition list (typical <dl> FAQ list)
  - Anchor list (a FAQ with anchor link list)

  If you are using accordion you can modify its behavior easily by the display
  settings.

Credits
-------
Initially created for Drupal by Patrick Drotleff (patrickd)).

Ported to Backdrop by [Alan Mels](https://github.com/alanmels) of [AltaGrade.com](https://github.com/altagrade) - a Backdrop specific web, cloud and dedicated hosting provider.
