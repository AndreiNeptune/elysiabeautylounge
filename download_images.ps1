$destDir = "c:\Users\Andrei\Desktop\sites\site elysiabeautylounge\public\images"

$images = @{
    "hero-main.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/pretty-women-spend-time-at-resort-and-spa-hotel-2024-07-09-00-28-57-utc-scaled-1.jpg"
    "hero-thumb-1.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/wallpaper-background-of-beauty-treatment-items-for-spa-procedures-on-white-wooden-table-massage-sto.jpg"
    "hero-thumb-2.avif" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/ecff62fa-22e5-40d8-97cc-4a60cc33c9f2-ElysiaBeautyLounge-RO-Bucureti-Bucureti-BucuretiSectorul3-Fresha-scaled-1.avif"
    "hero-thumb-3.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/young-woman-in-spa-salon-1-1.jpg"
    "service-nails.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/03/unghii-zoo.jpg"
    "service-hair.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/03/luu.jpg"
    "service-extensions.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/03/extensii.jpg"
    "service-makeup.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/03/dub.jpg"
    "service-brows.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/05/50ce66b0-3a7e-4037-ae74-bd4579fc245e.jpg"
    "service-epilation.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-21.37.52.jpeg"
    "service-spa.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-21.42.51.jpeg"
    "service-packages.jpg" = "https://elysiabeautylounge.ro/wp-content/uploads/2026/01/female-client-getting-four-hand-massage-in-wellnes-2025-03-09-10-42-58-utc-scaled-1.jpg"
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

foreach ($entry in $images.GetEnumerator()) {
    $destPath = Join-Path $destDir $entry.Key
    if (-not (Test-Path $destPath)) {
        try {
            Write-Output "Downloading $($entry.Key)..."
            Invoke-WebRequest -Uri $entry.Value -OutFile $destPath -UseBasicParsing -TimeoutSec 15
            Write-Output "  OK: $($entry.Key)"
        } catch {
            Write-Output "  FAILED: $($entry.Key) - $($_.Exception.Message)"
        }
    } else {
        Write-Output "  SKIP (exists): $($entry.Key)"
    }
}

Write-Output "All downloads complete."
