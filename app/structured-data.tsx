export function StructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Metamorfosis 2026 - Congreso Nacional Juvenil",
    "description": "Congreso Nacional Juvenil 2026. Paquete Oficial Distrito Caribe con transporte, hospedaje, parques y más incluido.",
    "startDate": "2026-07-27T00:00:00-05:00",
    "endDate": "2026-08-02T23:59:59-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": [
      {
        "@type": "Place",
        "name": "Puebla",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Puebla",
          "addressRegion": "Puebla",
          "addressCountry": "MX"
        }
      },
      {
        "@type": "Place",
        "name": "San Luis Potosí",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Luis Potosí",
          "addressRegion": "San Luis Potosí",
          "addressCountry": "MX"
        }
      }
    ],
    "image": [
      "https://metamorfosis.jovenesdistritocaribe.com/images/flyer-oficial.jpg",
      "https://metamorfosis.jovenesdistritocaribe.com/images/transporte-web.png"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "Distrito Caribe",
      "url": "https://www.jovenesdistritocaribe.com"
    },
    "performer": {
      "@type": "Organization",
      "name": "Distrito Caribe"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://metamorfosis.jovenesdistritocaribe.com",
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-02-01T00:00:00-06:00",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "1500",
        "priceCurrency": "MXN",
        "description": "Inscripción inicial"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Jóvenes"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Dragonfly Agencia de Viajes",
    "url": "https://www.facebook.com/Dragonflyviajes",
    "logo": "https://metamorfosis.jovenesdistritocaribe.com/credits/dragonfly-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-998-186-9770",
      "contactType": "Reservaciones",
      "areaServed": "MX",
      "availableLanguage": "es"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cancún",
      "addressRegion": "Quintana Roo",
      "addressCountry": "MX"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://metamorfosis.jovenesdistritocaribe.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Paquete",
        "item": "https://metamorfosis.jovenesdistritocaribe.com#paquete"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Precios",
        "item": "https://metamorfosis.jovenesdistritocaribe.com#precios"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contacto",
        "item": "https://metamorfosis.jovenesdistritocaribe.com#contacto"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
